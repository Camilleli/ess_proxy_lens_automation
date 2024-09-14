function stepTimeout(actions, delay) {
    actions.forEach((action, index) => {
        setTimeout(action, delay * (index + 1));
    });
}

function setInputValue(inputElement, newValue) {
  // write client ip in the input
  const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
  nativeInputValueSetter.call(inputElement, newValue);
  // Dispatch the input event to trigger React's state update
  const event = new Event('input', { bubbles: true });
  inputElement.dispatchEvent(event);
}

// Define the actions as functions
var actions = [
      //----
      //#### Horizontal axis
    () => {
      // edit Horizontal axis
      $('fieldset').has('legend:contains("Horizontal axis")').find('button[title^="Edit"][title$="configuration"]').click();
    },
    () => {
      // click date histogram
      $("button").has('span[title="Date histogram"]').click();
      },
    () => {
      // click field
      $('div[data-test-subj="indexPattern-dimension-field"]').find('input').click();
      },
    () => {
      // click timestamp in drop down
      $(".euiPopover__panel").find('button.euiFilterSelectItem[title="@timestamp"]').click();
      },
    () => {
      // close popup
      $('span.euiButtonEmpty__text:contains("Close")').closest('button').click()
      },
  

      //----
      //#### Vertical axis
    () => {
      //edit vertical axis
      $('fieldset').has('legend:contains("Vertical axis")').find('button[title^="Edit"][title$="configuration"]').click();
      },
    () => {
      // click forumla button
      $('span[data-text="Quick function"]').closest('button').click();
      },
    () => {
      // founction count
      $('button#average').click();
      },
    () => {
      // click field
      $('div[data-test-subj="indexPattern-dimension-field"]').find('input').click();
      },
    () => {
      const inputElement = $('div[data-test-subj="indexPattern-dimension-field"]').find('input')[0];
      setInputValue(inputElement, "request_length");
      },
    () => {
      // click client_ip in drop down
      $(".euiPopover__panel").find('button.euiFilterSelectItem[title="client_ip"]').click();
      },
    () => {
      // close popup
      $('span.euiButtonEmpty__text:contains("Close")').closest('button').click()
      },


    //----
    //#### Breakdown
    () => {
      // edit Breakdown
      $('span:contains("Add or drag-and-drop a field")').closest("button").click();
      },
    () => {
      // click top values function
      $('button#terms').click();
      },
    () => {
      // click field
      $('div[data-test-subj="indexPattern-dimension-field"]').find('input').click();
      },
    () => {
      const inputElement = $('div[data-test-subj="indexPattern-dimension-field"]').find('input')[0];
      setInputValue(inputElement, "client_ip");
      },
    () => {
      // click client_ip in drop down
      $(".euiPopover__panel").find('button.euiFilterSelectItem[title="client_ip"]').click();
      },
    () => {
      const inputElement = $('input[aria-label="Number of values"]')[0];
      setInputValue(inputElement, 10);
      },
    () => {
      // close popup
      $('span.euiButtonEmpty__text:contains("Close")').closest('button').click()
      },
];

// Run the function to perform actions with 500ms steps
stepTimeout(actions, 500);
