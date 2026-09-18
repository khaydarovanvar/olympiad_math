#!/usr/bin/env python3
"""Dump what is still untranslated, as address + English source.

    python3 content/uz/extract.py 6        # one topic
    python3 content/uz/extract.py          # every topic, as a summary

The addresses printed here are exactly the keys content/uz/uz_NN.py must use."""
import importlib.util, pathlib, sys

ROOT = pathlib.Path(__file__).resolve().parent.parent.parent
spec = importlib.util.spec_from_file_location('build', ROOT / 'content' / 'build.py')
build = importlib.util.module_from_spec(spec); spec.loader.exec_module(build)


def table(n):
    p = ROOT / 'content' / 'uz' / ('uz_%02d.py' % n)
    if not p.exists():
        return {}
    return build._module(p, 'uz_%02d' % n).UZ


def main():
    wanted = [int(a) for a in sys.argv[1:]] or list(range(1, 17))
    if len(wanted) == 1:
        n = wanted[0]
        have, lesson = table(n), build.load(n)
        for addr, _target, en in build.uz_slots(lesson):
            if addr in have:
                continue
            print('%s\t%s' % (addr, en.replace('\\n', ' ⏎ ')))
        return
    print('%-4s %-7s %-7s %s' % ('n', 'done', 'total', 'left'))
    grand = [0, 0]
    for n in wanted:
        lesson = build.load(n)
        if lesson is None:
            continue
        slots = build.uz_slots(lesson)
        have = table(n)
        done = sum(1 for a, _t, _e in slots if a in have)
        grand[0] += done; grand[1] += len(slots)
        print('%-4d %-7d %-7d %d' % (n, done, len(slots), len(slots) - done))
    print('%-4s %-7d %-7d %d  (%d%%)' % ('all', grand[0], grand[1], grand[1] - grand[0],
                                         round(100 * grand[0] / grand[1]) if grand[1] else 0))


if __name__ == '__main__':
    main()
