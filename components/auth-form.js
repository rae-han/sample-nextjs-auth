'use client';

import Link from 'next/link';
// import { useActionState } from "react";
import { useFormState } from 'react-dom';

import { signup } from '@/actions/auth-actions';

export default function AuthForm() {
  // const [formState, formAction] = useActionState(signup, {})
  const [formState, formAction] = useFormState(signup, {})

  return (
    <form id="auth-form" action={formAction}>
      <div>
        <img src="/images/auth-icon.jpg" alt="A lock icon" />
      </div>
      <p>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </p>
      <p>
        <button type="submit">
          Create Account
        </button>
      </p>
      <p>
        <Link href="/">Login with existing account.</Link>
      </p>
    </form>
  );
}
