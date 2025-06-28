This project follows Clean Architecture:

- `core` = domain
- `logic` = application/use-cases
- `edges` = interface adapters (routes/controllers)
- `adapters` = infrastructure (DB, APIs)
- `nodes` = framework glue (server, config)


Core defines it, Logic uses it, Edges expose it, Adapters connect it, Nodes run it
