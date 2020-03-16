var RoomsView = {
  $button: $("#rooms button"),
  $select: $("#rooms select"),

  initialize: function() {},

  render: function(roomName) {
    return (htmlMessage = $("<p></p>").text(`${roomName}`));
  },

  renderRoom: function(roomName) {
    var currentRoom = RoomsView.render(roomName);
    $("#rooms select").append(currentRoom);
  }
};
