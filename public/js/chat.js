
$(document).ready(function() {
  var TYPING_TIMER_LENGTH = 400;

  var socket, $window, $usernameInput, $messages, $users, $sendMessage, $join, $participants;
  var $inputMessage = $('input#message'); // Input message input box

  if (!$inputMessage.length) {
    return;
  }

  socket = io.connect('http://localhost:3030');
  $window = $(window);
  $usernameInput = $('input#username');
  $messages = $('.messages');
  $sendMessage = $('#sendMessage');
  $join = $('#join');
  $users = $('.chat-available-user');
  $participants = $('.noUsers');

  // Prompt for setting a username
  var username;
  var connected = false;
  var typing = false;
  var lastTypingTime;
  var $currentInput = $usernameInput.focus();

  var addParticipantsMessage = function addParticipantsMessage(data) {
    var message = '';

    if (data.numUsers === 1) {
      message += 'there is 1 participant';
    } else {
      message += 'there are ' + data.numUsers + ' participants';
    }
    log(message);
  };

  var addChatMessage = function addChatMessage(data) {

    var ts = new Date();

    var time = ts.toTimeString().substring(0, 5);
    var $first = $('<div>').addClass('first-part').addClass('odd').text(data.username);
    var $second = $('<div>').addClass('second-part').text(data.message);
    var $third = $('<div>').addClass('third-part').text(time);

    var $el = $('<div>').addClass('group-rom');
    $el.append($first);
    $el.append($second);
    $el.append($third);

    addMessageElement($el);
  };

  var addChatTyping = function addChatTyping(data) {
    var $user = $('*[data-user="' + data.username + '"]');
    $user.find('small').text(' typing');
  };

  var removeChatTyping = function removeChatTyping(data) {
    var $user = $('*[data-user="' + data.username + '"]');
    $user.find('small').text('');
  };

  var sendMessage = function sendMessage() {
    var message = $inputMessage.val();
    // Prevent markup from being injected into the message
    message = cleanInput(message);
    // if there is a non-empty message and a socket connection
    if (message && connected) {
      $inputMessage.val('');
      addChatMessage({
        username: username,
        message: message
      });
      // tell server to execute 'new message' and send along one parameter
      socket.emit('new message', message);
    }
  };

  var setUsername = function setUsername() {
    username = cleanInput($usernameInput.val().trim());

    // If the username is valid
    if (username) {
      // Tell the server your username
      socket.emit('add user', username);
    }
  };

  var updateTyping = function updateTyping() {

    if (connected) {
      if (!typing) {
        typing = true;
        socket.emit('typing');
      }
      lastTypingTime = (new Date()).getTime();
      setTimeout(function() {
        var typingTimer = (new Date()).getTime();
        var timeDiff = typingTimer - lastTypingTime;

        if (timeDiff >= TYPING_TIMER_LENGTH && typing) {
          socket.emit('stop typing');
          typing = false;
        }
      }, TYPING_TIMER_LENGTH);
    }
  };

  var addMessageElement = function addMessageElement(el) {
    var $el = $(el);
    $messages.append($el);
  };

  var log = function log(message) {
    var ts = new Date();

    var time = ts.toTimeString().substring(0, 5);
    var $first = $('<div>').addClass('first-part');
    var $second = $('<div>').addClass('second-part').text(message);
    var $third = $('<div>').addClass('third-part').text(time);

    var $el = $('<div>').addClass('group-rom');
    $el.append($first);
    $el.append($second);
    $el.append($third);

    addMessageElement($el);
  };

  var cleanInput = function cleanInput(input) {
    return $('<div/>').text(input).text();
  };

  // Keyboard events
  $window.keydown(function(event) {
    // When the client hits ENTER on their keyboard
    if (event.which === 13) {
      if (username) {
        sendMessage();
        socket.emit('stop typing');
        typing = false;
      } else {
        setUsername();
      }
    }
  });

  $inputMessage.on('input', function() {
    updateTyping();
  });

  $sendMessage.on('click', function() {
    sendMessage();
    socket.emit('stop typing');
  });

  $join.on('click', function() {
    setUsername();
  });

  // Click events

  // Socket events

  // Whenever the server emits 'login', log the login message
  socket.on('login', function(data) {
    connected = true;
    $inputMessage.removeAttr('disabled');
    $inputMessage.attr('placeholder', 'Type message...');
    $join.attr('disabled', 'disabled');
    // Display the welcome message
    var message = 'Welcome to the Chat Room ';
    log(message);
    // addParticipantsMessage(data);
  });

  // Whenever the server emits 'new message', update the chat body
  socket.on('new message', function(data) {
    addChatMessage(data);
  });

  // Whenever the server emits 'user joined', log it in the chat body
  socket.on('user joined', function(data) {
    log(data.username + ' joined');
  });

  socket.on('users', function(data) {
    $users.html('');
    var userCounter = 0;
    $.each(data, function(index, value) {
      var html = `<span data-user="${value}"><strong>${value}</strong><small></small></span>`;
      var $li = $('<li>').html(html);
      $users.append($li);
      userCounter++;
    });
    $participants.text(userCounter);

  });

  // Whenever the server emits 'user left', log it in the chat body
  socket.on('user left', function(data) {
    log(data.username + ' left');
    removeChatTyping(data);
  });

  // Whenever the server emits 'typing', show the typing message
  socket.on('typing', function(data) {
    addChatTyping(data);
  });

  // Whenever the server emits 'stop typing', kill the typing message
  socket.on('stop typing', function(data) {
    removeChatTyping(data);
  });
});
