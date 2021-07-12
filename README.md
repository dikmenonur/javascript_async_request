# JavaScript Async Form

## Contents

- [Description](#description)
- [Usage](#usage)
  - [Client-side](#client-side)
- [Requirements](#requirements)

## Description

This js file is for sending form elements server-side async.
You will have done all **post**, **get** and **other** http operations in a very short time.

## Usage


Include the JavaScript file script in your HTML markup:
### Client-side
```html
<script src="js/asyncForm.js"></script>
```

The first method is an example for the post method.
Here you can parse the form elements and send them to the asnycForm library.

```html
<script type="text/x-tmpl" id="async-demo">

  async function createAsync(event) {
        event.preventDefault();

        const data = new FormData(event.target);
        const userId = data.get('UserId');
        const referenceNo = data.get('ReferenceNo');
        const expenseFirmId = data.get('ExpenseFirmId');

        let userIdRef = IsNotEmpty(userId) ? userId : 1;
        customsExpense.userId = userIdRef;
        customsExpense.expenseOwnerId = userIdRef;
        customsExpense.declarationId = referenceNo;
        customsExpense.expenseFirmId = expenseFirmId;
        customsExpense.ownerOfJudiciallyTypeId = userIdRef;
        customsExpense.currencyCodeId = 1;

        await asyncRequest.InsertAsync(event, customsExpense);
        return false;
    }
</script>
```

**"o"** (the lowercase letter) is a reference to the data parameter of the
template function (see the API section on how to modify this identifier).

In your application code, create a JavaScript object to use as data for the
template:

```js
var data = {
  title: 'JavaScript Templates',
  license: {
    name: 'MIT license',
    url: 'https://opensource.org/licenses/MIT'
  },
  features: ['asncyform & fast', 'powerful', '-']
}
```

In a real application, this data could be the result of retrieving a
[JSON](https://json.org/) resource.


Add a other js property **test.js** with the following content:

```js

    async function deleteAsync(event) {
        await asyncRequest.DeleteAsync(event);
        return false;
    }

    async function updateAsync(event) {
        await asyncRequest.UpdateAsync(event);
        return false;
    }
```


## Requirements

The JavaScript script.


## License

The JavaScript Templates script is released under the
[MIT license](https://opensource.org/licenses/MIT).




