#!/usr/bin/env python3
"""Local static server with clean-URL support — mirrors the production
.htaccess so local dev matches the deployed site:

  /            -> index.html
  /about       -> about.html        (served, no extension)
  /about.html  -> 301 redirect to /about
  /index.html  -> 301 redirect to /

Usage:  python serve.py [port]        (default port 8765)
Use this instead of VS Code Live Server, which can't resolve clean URLs.
"""
import http.server, os, sys
from urllib.parse import urlparse

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8765
ROOT = os.path.dirname(os.path.abspath(__file__))


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **k):
        super().__init__(*a, directory=ROOT, **k)

    def do_GET(self):
        if self._redirect_html():
            return
        super().do_GET()

    def do_HEAD(self):
        if self._redirect_html():
            return
        super().do_HEAD()

    def _redirect_html(self):
        """301 any explicit .html URL to its clean form (/index.html -> /)."""
        path = urlparse(self.path).path
        target = None
        if path == '/index.html':
            target = '/'
        elif path.endswith('.html'):
            target = path[:-5]
        if target is None:
            return False
        self.send_response(301)
        self.send_header('Location', target)
        self.end_headers()
        return True

    def translate_path(self, path):
        """Serve an extensionless request from its matching .html file."""
        fs = super().translate_path(path)
        if not os.path.isdir(fs) and not os.path.exists(fs) and os.path.isfile(fs + '.html'):
            return fs + '.html'
        return fs


if __name__ == '__main__':
    os.chdir(ROOT)
    with http.server.ThreadingHTTPServer(('', PORT), Handler) as httpd:
        print('Clean-URL static server: http://localhost:%d  (root: %s)' % (PORT, ROOT))
        httpd.serve_forever()
