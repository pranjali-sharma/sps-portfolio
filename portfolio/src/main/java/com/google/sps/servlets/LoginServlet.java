package com.google.sps.servlets;

import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/login")
public class LoginServlet extends HttpServlet {
  private final static String URL_TO_REDIRECT = "/";

  UserService userService = UserServiceFactory.getUserService();

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    response.setContentType("application/json;");
    String json = getLoginInfoAsJson();
    response.getWriter().println(json);
  }

  private String getLoginInfoAsJson() {
    boolean loggedIn = userService.isUserLoggedIn();
    String json = "{ \"loggedIn\": " + loggedIn;
    if (loggedIn) {
      String userEmail = userService.getCurrentUser().getEmail();
      System.out.println("Logged in user is " + userEmail);
      json += ", \"userEmail\": \"" + userEmail + "\"";
      String logoutUrl = userService.createLogoutURL(URL_TO_REDIRECT);
      json += ", \"logoutUrl\": \"" + logoutUrl + "\"";
    } else {
      System.out.println("Loggedout");
      String loginUrl = userService.createLoginURL(URL_TO_REDIRECT);
      json += ", \"loginUrl\":\"" + loginUrl + "\"";
    }
    json += "}";
    return json;
  }
}