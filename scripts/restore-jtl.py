#!/usr/bin/env python3
"""Restore and verify the original raw JTL files from the Git checkout."""
import gzip,hashlib,pathlib
root=pathlib.Path(__file__).resolve().parents[1]/'data'
checks={line.split('  ',1)[1]:line.split('  ',1)[0] for line in (root/'SHA256SUMS.txt').read_text().splitlines()}
for name,digest in checks.items():
 data=gzip.open(root/(name+'.gz'),'rb').read()
 if hashlib.sha256(data).hexdigest()!=digest:raise ValueError('SHA256 mismatch: '+name)
 (root/name).write_bytes(data)
print(f'Restored and verified {len(checks)} original JTL files.')
