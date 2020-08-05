import React from 'react';

function SvgComponent(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <svg viewBox="0 0 512 512" {...props}>
      <path d="M450.462 194.372h-39.028v-38.179C411.428 69.929 341.739.007 256.001 0c-85.738.007-155.628 69.929-155.635 156.192v38.179H61.538c-14.26 0-25.928 11.74-25.928 26.09V485.91c0 14.351 11.667 26.09 25.928 26.09h388.925c14.26 0 25.928-11.74 25.928-26.09V220.462c0-14.352-11.668-26.09-25.929-26.09zm-330.65-38.18c.007-37.758 15.583-71.853 40.17-96.609 24.607-24.736 58.488-40.008 96.02-40.014 37.525.007 71.413 15.278 96.013 40.014 24.593 24.756 39.968 58.851 39.975 96.609v38.179H119.812v-38.179zm330.652 336.239H61.538c-3.513 0-6.482-2.989-6.482-6.521V220.462c0-3.533 2.969-6.521 6.482-6.521h388.925c3.513 0 6.482 2.982 6.482 6.521V485.91h.001c-.001 3.532-2.97 6.521-6.482 6.521z" />
      <path d="M256.001 296.763c-25.067 0-45.375 20.438-45.375 45.654 0 21.858 15.259 40.098 35.652 44.577v46.73c0 5.406 4.356 9.782 9.723 9.782 5.367 0 9.723-4.376 9.723-9.782v-46.73c20.392-4.48 35.652-22.727 35.652-44.577-.001-25.211-20.309-45.654-45.375-45.654zm0 71.749c-14.3 0-25.928-11.707-25.928-26.09s11.629-26.09 25.928-26.09c14.3 0 25.928 11.707 25.928 26.09s-11.629 26.09-25.928 26.09z" />
    </svg>
  );
}

export default SvgComponent;
