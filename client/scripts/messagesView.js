var MessagesView = {
  $chats: $("#chats"),

  initialize: function() {},

  // builds out the message, turn it into HTML
  render: function(message) {
    // render the message
    return (htmlMessage = $("<p></p>").text(`${message.text}`));
  },

  // adds it to the DOM
  renderMessage: function(message) {
    // take my render, and add it to #chats
    var currentMsg = MessagesView.render(message);
    $("#chats").append(currentMsg);
  }
};
