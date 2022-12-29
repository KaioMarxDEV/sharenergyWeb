import { useState } from 'react';

export default function RememberMeButton() {
  const [rememberMe, setRememberMe] = useState(false);

  function handleChange(event: any) {
    setRememberMe(event.target.checked);
  }

  return (
    <label>
      <input type="checkbox" checked={rememberMe} onChange={handleChange} />
      Remember Me
    </label>
  );
}
