// The entry point of this lambda function.
exports.handler = function(event, context) {
  console.log(event);

  context.succeed({
    "response_type": "in_channel",
    "text": "I found some about \"" + event.text + "\"",
    "attachments": [
        {
            "text": "For more info please visit to \nhttps://ko.wikipedia.org/wiki/" + event.text,
            "color": "#7CD197"
        }
    ]
  });

};
