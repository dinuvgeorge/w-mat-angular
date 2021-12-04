export const demoComponentsList = [
  {
    name: 'Grids',
    route: '/components/grid',
    children: [
      { name: 'Overview', route: '/components/grid/overview' },
      // { name: 'Column', route: '/components/grid/columns' },
    ],
  },
  {
    name: 'Buttons',
    route: '/components/buttons',
    children: [
      { name: 'Button', route: '/components/button' },
      { name: 'Button Toggle', route: '/components/button-toogle' },
      { name: 'Checkbox', route: '/components/checkbox' },
      { name: 'Chip', route: '/components/chip' },
      { name: 'Radio Button', route: '/components/radio-button' },
      { name: 'Ripple', route: '/components/ripple' },
      { name: 'Slide Toggle', route: '/components/slide-toggle' },
    ],
  },
  {
    name: 'Calendars',
    route: '/components/date-picker',
    children: [
      { name: 'Date Picker', route: '/components/date-picker/overview' },
    ],
  },
  {
    name: 'DropDowns',
    route: '/components/drop-downs',
    children: [
      { name: 'Autocomplete', route: '/components/autocomplete' },
      { name: 'DropDown', route: '/components/drop-down' },
    ],
  },
  {
    name: 'Editors',
    route: '/components/editors',
    children: [
      { name: 'Form Field', route: '/components/form-field' },
      { name: 'Stepper', route: '/components/stepper' },
    ],
  },
  {
    name: 'Inputs',
    route: '/components/inputs',
    children: [
      { name: 'Text input', route: '/components/input-text' },
      { name: 'Numeric input', route: '/components/input-numeric' },
      { name: 'Stepper', route: '/components/slider' },
    ],
  },
  {
    name: 'Layout',
    route: '/components/layout',
    children: [
      { name: 'Card', route: '/components/card' },
      { name: 'Dialog', route: '/components/dialog' },
      { name: 'Divider', route: '/components/divider' },
      { name: 'Panel', route: '/components/panel' },
      { name: 'Grid List', route: '/components/grid-list' },
      { name: 'Tooltip', route: '/components/tooltip' },
    ],
  },
  {
    name: 'Lists',
    route: '/components/lists',
    children: [
      { name: 'Simple List', route: '/components/simple-list' },
      { name: 'Template List', route: '/components/template-list' },
    ],
  },
  {
    name: 'Navigations',
    route: '/components/navigations',
    children: [
      { name: 'Context Menu', route: '/components/context-menu' },
      { name: 'Side Navigation', route: '/components/sidenav' },
      { name: 'Tab', route: '/components/tab' },
      { name: 'Toolbar', route: '/components/toolbar' },
      { name: 'Tree', route: '/components/tree' },
    ],
  },
  {
    name: 'Notifications',
    route: '/components/notifications',
    children: [
      { name: 'Progress Bar', route: '/components/progress-bar' },
      {
        name: 'Progress Spinner',
        route: '/components/progress-spinner',
      },
      { name: 'Snack Bar', route: '/components/snack-bar' },
    ],
  },
];
