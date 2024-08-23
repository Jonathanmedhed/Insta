import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';

import { useLoginMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isForgotPass, setIsForgotPass] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get('redirect') || '/';

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate(redirect);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <div className='login'>
      <div className='login__inner'>
        {isForgotPass ? (
          <form onSubmit={submitHandler}>
            <h1>Trouble logging in?</h1>
            <p>
              Enter your email or username and we'll send you a link to get back
              into your account.
            </p>
            <input
              type='email'
              placeholder='Enter email or username'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button disabled={isLoading} type='submit'>
              Log In
            </button>
            <span onClick={() => setIsForgotPass(false)} type='button'>
              Return to login
            </span>
          </form>
        ) : (
          <form onSubmit={submitHandler}>
            <i
              data-visualcompletion='css-img'
              aria-label='Instagram'
              className='insta-logo'
              role='img'
            ></i>
            <input
              className='--mb-half'
              type='email'
              placeholder='Enter email or username'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className='--mb-1'
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className='login__forgot'
              onClick={() => setIsForgotPass(true)}
              type='button'
            >
              Forgot password?
            </span>

            <button
              className='--mb-2'
              disabled={isLoading || !(email && password)}
              type='submit'
            >
              Log In
            </button>
          </form>
        )}
        {isLoading && <Loader />}
        <div className='login__signup'>
          Don't have an account?{' '}
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
            Sign up
          </Link>
        </div>
      </div>
      <div className='login__footer --mb-1'>
        <span className='footer__top'>from</span>
        <span className='footer__name'>Jonathan</span>
      </div>
    </div>
  );
};

export default LoginScreen;
