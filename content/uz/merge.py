#!/usr/bin/env python3
"""Merge a batch of translations into content/uz/uz_NN.py.

    python3 content/uz/merge.py 2 /tmp/uz02_theory.py

The batch file defines a dict named BATCH.  Existing entries are kept unless the
batch overrides them, and the file is rewritten with repr() so the TeX
backslashes survive exactly as authored."""
import importlib.util, pathlib, sys

ROOT = pathlib.Path(__file__).resolve().parent.parent.parent


def load(path, name, attr):
    spec = importlib.util.spec_from_file_location(name, path)
    m = importlib.util.module_from_spec(spec); spec.loader.exec_module(m)
    return getattr(m, attr)


HEAD = '''# -*- coding: utf-8 -*-
"""Uzbek for topic %d.

Keyed by the addresses that content/uz/extract.py prints.  Anything missing
here falls back to English on the page, so the file may grow a piece at a time.
Modern Uzbek Latin script; the marks are U+02BB (oʻ, gʻ) and U+02BC."""

UZ = {
'''


def main():
    n = int(sys.argv[1])
    target = ROOT / 'content' / 'uz' / ('uz_%02d.py' % n)
    cur = load(target, 'uz_%02d' % n, 'UZ') if target.exists() else {}
    before = len(cur)
    for batch_path in sys.argv[2:]:
        cur.update(load(batch_path, 'batch', 'BATCH'))
    lines = [' %-18s %s,' % ("'%s':" % k, repr(v)) for k, v in cur.items()]
    target.write_text(HEAD % n + '\n'.join(lines) + '\n}\n', encoding='utf-8')
    back = load(target, 'uz_%02d' % n, 'UZ')
    assert back == cur, 'round trip changed the values'
    print('uz_%02d.py: %d -> %d entries' % (n, before, len(back)))


if __name__ == '__main__':
    main()
