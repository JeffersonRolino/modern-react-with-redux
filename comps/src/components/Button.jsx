import className from "classnames";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  const classes = className(
    rest.className,
    "flex items-center gap-2 px-3 py-1.5 my-5 border",
    {
      "border-blue-600 bg-blue-600 text-white": primary,
      "border-gray-900 bg-gray-900 text-white": secondary,
      "border-green-600 bg-green-600 text-white": success,
      "border-yellow-400 bg-yellow-400 text-gray-900": warning,
      "border-red-600 bg-red-500 text-white": danger,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-gray-900": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-400": outline && warning,
      "text-red-500": outline && danger,
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

// Button.propTypes = {
//   checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
//     const count =
//       Number(!!primary) +
//       Number(!!secondary) +
//       Number(!!success) +
//       Number(!!warning) +
//       Number(!!danger);

//     if (count > 1) {
//       return new Error(
//         "Only one of primary, secondary, success, warning, danger can be true at same time!"
//       );
//     }

//     return new Error("Invalid props type");
//   },
// };

export default Button;
