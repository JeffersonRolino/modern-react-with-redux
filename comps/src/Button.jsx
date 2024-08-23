import className from 'classnames';

const finalClassName = className('p-6', {
  'bg-blue-500': true,
  'px-6': false,
  'py-5': true
});

console.log(finalClassName);

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded
}) {
  return (
    <button className="px-3 py-1.5 border border-blue-600 bg-blue-500 text-white">{children}</button>
  )
}

Button.propTypes = {
  checkVariationValue: ({primary, secondary, success, warning, danger}) => {
    const count = Number(!!primary) + Number(!!secondary) + Number(!!success) + Number(!!warning) + Number(!!danger);

    if(count > 1){
      return new Error('Only one of primary, secondary, success, warning, danger can be true at same time!');
    }

    return new Error('Invalid props type');
  }
};

export default Button
