import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorMessage: '',
    showError: false,
    isChecked: false,
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})

    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errMsg => {
    this.setState({showError: true, errorMessage: errMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const url = 'https://apis.ccbp.in/login'
    const {username, password} = this.state
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassWord = event => {
    this.setState({password: event.target.value})
  }

  onShowPassword = password => {
    this.setState({password, isChecked: true})
  }

  render() {
    const {username, password, showError, errorMessage, isChecked} = this.state

    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="website logo"
        />
        <form onSubmit={this.submitForm}>
          <div>
            <label htmlFor="name">USERNAME</label>
            <input
              type="text"
              id="name"
              placeholder="username"
              value={username}
              onChange={this.onChangeUserName}
            />
          </div>
          <div>
            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              id="password"
              placeholder="password"
              value={password}
              onChange={this.onChangePassWord}
            />
          </div>
          <div>
            <input
              type="checkbox"
              id="showPassword"
              onChange={this.onShowPassword}
              value={isChecked}
            />
            <label htmlFor="showPassword">Show Password</label>
          </div>
          <button type="submit">Login</button>
          {showError && <p>*{errorMessage}</p>}
        </form>
      </div>
    )
  }
}
export default LoginForm
