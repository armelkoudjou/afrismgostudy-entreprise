export function FormField({
  name,
  label,
  type = 'text',
  error,
  touched,
  required = false,
  children,
  className = '',
  ...rest
}) {
  const showError = error && touched;
  
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      {children || (
        <input
          id={name}
          name={name}
          type={type}
          className={`w-full px-4 py-2 border ${
            showError ? 'border-red-500' : 'border-gray-300'
          } rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500`}
          aria-invalid={showError ? 'true' : 'false'}
          aria-describedby={showError ? `${name}-error` : undefined}
          {...rest}
        />
      )}
      
      {showError && (
        <p id={`${name}-error`} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}