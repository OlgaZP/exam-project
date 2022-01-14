CREATE TABLE IF NOT EXISTS public."Conversations" 
(
	id SERIAL PRIMARY KEY,
	created_At timestamp(0) WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_At timestamp(0) WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
)
TABLESPACE pg_default;

CREATE TABLE IF NOT EXISTS public."Messages"
(
    id SERIAL PRIMARY KEY,
    conversationId integer REFERENCES public."Conversations"(id),
    body varchar(255) NOT NULL DEFAULT '',
    sender integer NOT NULL REFERENCES public."Users"(id),
	created_At timestamp(0) WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_At timestamp(0) WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
)
TABLESPACE pg_default;

CREATE TABLE IF NOT EXISTS public."Participants"
(
    id SERIAL PRIMARY KEY,
	userId integer NOT NULL REFERENCES public."Users"(id),
    conversationId integer REFERENCES public."Conversations"(id),
    blackList boolean DEFAULT FALSE,
	favouriteList boolean DEFAULT FALSE    
)
TABLESPACE pg_default;

CREATE TABLE IF NOT EXISTS public."Catalogs"
(
    id SERIAL PRIMARY KEY,
    catalogName varchar(100) NOT NULL DEFAULT 'Catalog',    
    userId integer NOT NULL REFERENCES public."Users"(id)
)
TABLESPACE pg_default;

CREATE TABLE IF NOT EXISTS public."CatalogedConversations"
(
    id SERIAL PRIMARY KEY,
    catalogId integer NOT NULL REFERENCES public."Catalogs"(id),    
    conversationId integer NOT NULL REFERENCES public."Conversations"(id)
)
TABLESPACE pg_default;