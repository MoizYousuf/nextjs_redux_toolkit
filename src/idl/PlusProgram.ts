export type PlusProgram = {
    "version": "0.1.0",
    "name": "plus_program",
    "instructions": [
        {
            "name": "operation",
            "accounts": [
                {
                    "name": "plusAccount",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "signer",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "first",
                    "type": "i64"
                },
                {
                    "name": "second",
                    "type": "i64"
                },
                {
                    "name": "operator",
                    "type": {
                        "defined": "Operator"
                    }
                }
            ]
        }
    ],
    "accounts": [
        {
            "name": "PlusBank",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "result",
                        "type": "i64"
                    }
                ]
            }
        }
    ],
    "types": [
        {
            "name": "Operator",
            "type": {
                "kind": "enum",
                "variants": [
                    {
                        "name": "Add"
                    },
                    {
                        "name": "Sub"
                    }
                ]
            }
        }
    ],
    "metadata": {
        "address": "HBoWC3fVTep7FWfe1dFr1cWxiV3nQzStLwkgdnLjZymk"
    }
}

export const IDL: PlusProgram = {
    "version": "0.1.0",
    "name": "plus_program",
    "instructions": [
        {
            "name": "operation",
            "accounts": [
                {
                    "name": "plusAccount",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "signer",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "first",
                    "type": "i64"
                },
                {
                    "name": "second",
                    "type": "i64"
                },
                {
                    "name": "operator",
                    "type": {
                        "defined": "Operator"
                    }
                }
            ]
        }
    ],
    "accounts": [
        {
            "name": "PlusBank",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "result",
                        "type": "i64"
                    }
                ]
            }
        }
    ],
    "types": [
        {
            "name": "Operator",
            "type": {
                "kind": "enum",
                "variants": [
                    {
                        "name": "Add"
                    },
                    {
                        "name": "Sub"
                    }
                ]
            }
        }
    ],
    "metadata": {
        "address": "HBoWC3fVTep7FWfe1dFr1cWxiV3nQzStLwkgdnLjZymk"
    }
}