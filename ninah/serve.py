#!/usr/bin/env python3
"""Static server for this bundle: correct MIME types, nothing to install beyond Python 3.

    python serve.py [port]      # default 8000, then open http://127.0.0.1:<port>/
"""
import http.server
import os
import socketserver
import sys

ROOT = os.path.dirname(os.path.abspath(__file__))
TYPES = {
    '.wasm': 'application/wasm',
    '.js': 'text/javascript',
    '.mjs': 'text/javascript',
    '.json': 'application/json',
    '.bin': 'application/octet-stream',
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css',
    '.png': 'image/png',
}


class Handler(http.server.SimpleHTTPRequestHandler):
    extensions_map = {**http.server.SimpleHTTPRequestHandler.extensions_map, **TYPES}

    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache')
        super().end_headers()

    def log_message(self, fmt, *args):
        pass


if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
    os.chdir(ROOT)
    socketserver.ThreadingTCPServer.allow_reuse_address = True
    with socketserver.ThreadingTCPServer(('127.0.0.1', port), Handler) as httpd:
        print(f'No, I\'m not a Human - http://127.0.0.1:{port}/   (Ctrl+C to stop)')
        httpd.serve_forever()
