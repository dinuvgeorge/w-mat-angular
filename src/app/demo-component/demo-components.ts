export const demoComponentsList = [
  {
    name: 'Grids',
    route: '/components/grid',
    children: [
      { name: 'Overview', route: '/components/grid/overview' },
      { name: 'Column', route: '/components/grid/columns' },
    ],
  },
  {
    name: 'Tree Grids',
    route: '/components/tree-grid',
    children: [
      { name: 'Overview', route: '/components/tree-grid/overview' },
      { name: 'Column', route: '/components/tree-grid/columns' },
    ],
  },
  {
    name: 'Buttons',
    route: '/components/buttons',
    children: [
      { name: 'Button', route: '/components/buttons/button' },
      { name: 'Button Toggle', route: '/components/buttons/button-toogle' },
      { name: 'Checkbox', route: '/components/buttons/checkbox' },
      { name: 'Chip', route: '/components/buttons/chip' },
      { name: 'Radio Button', route: '/components/buttons/radio-button' },
      { name: 'Ripple', route: '/components/buttons/ripple' },
      { name: 'Slide Toggle', route: '/components/buttons/slide-toggle' },
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
      { name: 'Autocomplete', route: '/components/drop-downs/autocomplete' },
      { name: 'Autocomplete', route: '/components/drop-downs/drop-down' },
    ],
  },
  {
    name: 'Editors',
    route: '/components/editors',
    children: [
      { name: 'Form Field', route: '/components/editors/form-field' },
      { name: 'Stepper', route: '/components/editors/stepper' },
    ],
  },
  {
    name: 'Inputs',
    route: '/components/inputs',
    children: [
      { name: 'Text input', route: '/components/inputs/text-input' },
      { name: 'Numeric input', route: '/components/inputs/numeric-input' },
      { name: 'Stepper', route: '/components/inputs/slider' },
    ],
  },
  {
    name: 'Layout',
    route: '/components/layout',
    children: [
      { name: 'Card', route: '/components/layout/card' },
      { name: 'Dialog', route: '/components/layout/dialog' },
      { name: 'Divider', route: '/components/layout/divider' },
      { name: 'Panel', route: '/components/layout/panel' },
      { name: 'Grid List', route: '/components/layout/grid-list' },
      { name: 'Tooltip', route: '/components/layout/tooltip' },
    ],
  },
  {
    name: 'Lists',
    route: '/components/lists',
    children: [
      { name: 'Simple List', route: '/components/lists/simple-list' },
      { name: 'Template List', route: '/components/lists/template-list' },
    ],
  },
  {
    name: 'Navigations',
    route: '/components/navigations',
    children: [
      { name: 'Context Menu', route: '/components/navigations/context-menu' },
      { name: 'Side Navigation', route: '/components/navigations/sidenav' },
      { name: 'Tab', route: '/components/navigations/tab' },
      { name: 'Toolbar', route: '/components/navigations/toolbar' },
      { name: 'Tree', route: '/components/navigations/tree' },
    ],
  },
  {
    name: 'Notifications',
    route: '/components/notifications',
    children: [
      { name: 'Progress Bar', route: '/components/notifications/progress-bar' },
      {
        name: 'Progress Spinner',
        route: '/components/navigations/progress-spinner',
      },
      { name: 'Snack Bar', route: '/components/navigations/snack-bar' },
    ],
  },
];
