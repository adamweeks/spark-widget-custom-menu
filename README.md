# Creating Custom Activities

This is a basic example of how to instantiate a [Cisco Spark Space Widget](https://github.com/ciscospark/react-ciscospark/tree/master/packages/node_modules/%40ciscospark/widget-space)
with a custom activity menu option.

**Note: This option is currently only available when using the [browser global](https://github.com/ciscospark/react-ciscospark/tree/master/packages/node_modules/%40ciscospark/widget-space#browser-globals) method.

## Initialization Params

```js
window.ciscospark.widget(widgetEl).spaceWidget({
  accessToken: myAccessToken,
  customActivityTypes: [
    {
      // Menu Item Name
      displayName: 'Custom',
      // Internal Name
      name: 'custom',
      // Style for menu button
      buttonClassName: 'custom-activity',
      // Icon name from react-component-icon
      iconClassName: 'icon-call_camera_32',
      // React component to display when selected
      component: CustomActivity,
      // Types of spaces to support
      spaceTypes: ['direct', 'group'],
      // Type of widget (secondary type coming soon)
      type: 'ACTIVITY_TYPE_PRIMARY'
    }
  ],
  toPersonEmail: toPersonEmail
});
```

## Issues

- `react-component-icon` is bad on npm and requires you to use class name string directly [package](https://github.com/ciscospark/react-ciscospark/tree/master/packages/node_modules/%40ciscospark/react-component-icon)
- Custom icons/buttons
- `ACTIVITY_TYPE_PRIMARY` strings aren't exported anywhere
- Secondary Activities
  - No way to get button actions (cannot hide once opened)
  - Could use a wrapper function
