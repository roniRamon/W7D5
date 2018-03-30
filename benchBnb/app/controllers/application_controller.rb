class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :is_login?

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def login(user)
    @current_user = user
    session[:session_token] = user.reset_token!
  end

  def is_login?
    !!@current_user
  end

  def logout
    @current_user.reset_token!
    session[:session_token] = nil
  end

  def require_sign_in!
    redirect_to new_session_url unless is_login?
  end

end
