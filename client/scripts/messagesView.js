var MessagesView = {
  $chats: $("#chats"),

  initialize: function() {},

  // builds out the message, turn it into HTML
  render: function(message, className = "") {
    // render the message
    if (className.length > 1) {
      var currentClass = `className = "${className}"`;
      return (htmlMessage = $(`<p ${currentClass}></p>`).text(`${message}`));
    } else {
      return (htmlMessage = $(`<p></p>`).text(`${message}`));
    }
  },

  // adds it to the DOM
  renderMessage: function(message) {
    // take my render, and add it to #chats
    var currentRoom = MessagesView.render(message.roomname);
    var currentUsername = MessagesView.render(message.username, "username");
    var currentMsg = MessagesView.render(message.text);

    $("#chats").append(currentRoom);
    $("#chats").append(currentUsername);
    $("#chats").append(currentMsg);
  }
};
