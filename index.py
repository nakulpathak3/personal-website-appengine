import os
import webapp2
import jinja2


template_dir = os.path.join(os.path.dirname(__file__), 'templates')
jinja_env = jinja2.Environment(loader = jinja2.FileSystemLoader(template_dir),
                                                                autoescape = True)
from blog import Handler

class MainPage(Handler):
    def get(self):
        self.render("index.html")

class InfoPage(Handler):
    def get(self):
        self.render("details.html")

app = webapp2.WSGIApplication([('/', MainPage),
                                ('/details', InfoPage),
                               ],
                                debug = True)