# -*- coding: utf-8 -*-
"""Uzbek for the problem source labels.

Keyed by the English half of the label as written in the lesson files; a label
that is not listed falls through to the English."""

SOURCES = {
 'Warm-up':                    'Mashq',
 'School-round level':         'Maktab bosqichi · daraja',
 'District-round level':       'Tuman bosqichi · daraja',
 'Regional-round level':       'Viloyat bosqichi · daraja',
 'Republic-round level':       'Respublika bosqichi · daraja',
 'International level':        'Xalqaro daraja',
 'Classic':                    'Klassik masala',
 'Newton, classic':            'Nyuton masalasi',
 'Cauchy, classic':            'Koshining klassik masalasi',
 'Fermat, classic':            'Fermaning klassik masalasi',
 'Viviani, classic':           'Viviani teoremasi',
 'Ptolemy, classic':           'Ptolemey teoremasi',
 'Stewart, classic':           'Styuart teoremasi',
 'Vandermonde, classic':       'Vandermond ayniyati',
 'The trident lemma, classic': 'Uchqirrali lemma',
 'The Apollonius circle':      'Apolloniy aylanasi',
 'Dirichlet approximation':    'Dirixlening yaqinlashtirish teoremasi',
 'Erdős–Szekeres':             'Erdyosh–Sekeresh teoremasi',
 'IMO 1959, Problem 1':        'IMO 1959, 1-masala',
 'IMO 1960, Problem 1':        'IMO 1960, 1-masala',
 'IMO 1964, Problem 1':        'IMO 1964, 1-masala',
 'IMO 1964 Problem 2':         'IMO 1964, 2-masala',
 'IMO 1988 Problem 6':         'IMO 1988, 6-masala',
 'IMO 1992, Problem 1':        'IMO 1992, 1-masala',
 'IMO 1995 Problem 2':         'IMO 1995, 2-masala',
}
for _r in range(1, 5):
    for _p in range(1, 6):
        SOURCES['Mock round %d, problem %d' % (_r, _p)] = '%d-sinov turi, %d-masala' % (_r, _p)
