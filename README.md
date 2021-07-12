# JavaScript Async Form

## Contents

- [Description](#description)
- [Usage](#usage)
  - [Client-side](#client-side)
- [Requirements](#requirements)

## Description

1KB lightweight, fast & powerful JavaScript templating engine with zero
dependencies.  
Compatible with server-side environments like [Node.js](https://nodejs.org/),
module loaders like [RequireJS](https://requirejs.org/) or
[webpack](https://webpack.js.org/) and all web browsers.

## Usage


Include the (minified) JavaScript Templates script in your HTML markup:
### Client-side
```html
<script src="js/asyncForm.js"></script>
```

Add a script section with type **"text/x-tmpl"**, a unique **id** property and
your template definition as content:

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
  features: ['lightweight & fast', 'powerful', 'zero dependencies']
}
```

In a real application, this data could be the result of retrieving a
[JSON](https://json.org/) resource.

Render the result by calling the **tmpl()** method with the id of the template
and the data object as arguments:

```js
document.getElementById('result').innerHTML = tmpl('tmpl-demo', data)
``

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

The JavaScript Templates script has zero dependencies.


## License

The JavaScript Templates script is released under the
[MIT license](https://opensource.org/licenses/MIT).




