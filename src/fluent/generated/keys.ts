import "@servicenow/sdk/global";

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                        "cs0": {
                            "table": "sys_script_client",
                            "id": "0f3e1c89e08d4b3fbe703df10d124346"
                        },
                        "src_server_script_ts": {
                            "table": "sys_module",
                            "id": "186e6ce56829486eb396d1176cb3d097"
                        },
                        "br0": {
                            "table": "sys_script",
                            "id": "94c9a2d7ab644eb3856dc4890a683378"
                        },
                        "package_json": {
                            "table": "sys_module",
                            "id": "879eeb2fc8064c6290904300ba4cdaee"
                        }
                    };
            }
        }
    }
}
