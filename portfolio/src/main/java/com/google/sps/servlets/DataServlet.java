// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps.servlets;

import com.google.gson.Gson;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Servlet that returns some example content. TODO: modify this file to handle comments data */
@WebServlet("/data")
public class DataServlet extends HttpServlet {
  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    List<String> quotes = new ArrayList<>();
    quotes.add(
        "And I knew exactly what to do. But in a much more real sense, I had no idea what to do.- Michael G. Scott");
    quotes.add(
        "It is a capital mistake to theorize before one has data. Insensibly one begins to twist facts to suit theories, instead of theories to suit facts.- Sherlock Holmes");
    quotes.add(
        "When you are backed against the wall, break the goddamn thing down.- Harvey Specter");
    quotes.add(
        "Never forget what you are. The rest of the world will not. Wear it like armor, and it can never be used to hurt you.- Tyrion Lannister");
    response.setContentType("application/json;");
    response.getWriter().println(convertToJsonUsingGson(quotes));
  }

  /**
   * Converts a ServerStats instance into a JSON string using the Gson library.
   */
  private String convertToJsonUsingGson(List<String> quotes) {
    Gson gson = new Gson();
    String json = gson.toJson(quotes);
    return json;
  }
}
