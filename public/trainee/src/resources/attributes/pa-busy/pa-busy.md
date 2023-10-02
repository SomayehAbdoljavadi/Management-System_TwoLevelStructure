# How to use (PaBusy - CustomAttribute)
1. Copy the folder [pa-busy](resources/attributes/pa-busy/) into project (or module) 'resources/attribute/' folder.
2. Even import the custom attribute into your html file using `<require from="resources/attributes/pa-busy/pa-busy.js"></require>` or as a global resource in [index.js](resources/index.js) using `config.globalResources([PLATFORM.moduleName('resources/attributes/pa-busy/pa-busy')]);`.
3. Read the comments above each property in [pa-busy.js](resources/attributes/pa-busy/pa-busy.js)
4. Add the attribute `pa-busy` to your element and pass intended params to it like `<div pa-busy="is-showing.bind: showVM; message.bind: message; has-local-mask.bind: hasLocalMask; has-local-message.bind: hasLocalMessage; has-global-bar.bind: hasGlobalBar; spinner-type.bind: spinnerType;"></div>`.

# Requirements
1. NProgress `npm install --save nprogress`
