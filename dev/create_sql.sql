CREATE TABLE projects (
    _id         UUID PRIMARY KEY NOT NULL,
    repo        VARCHAR(255) NOT NULL,
    user_id     UUID REFERENCES users (_id) NOT NULL
);
 
CREATE TABLE tasks (
    _id         UUID PRIMARY KEY NOT NULL,
    isPending   BOOLEAN NOT NULL,
    status      VARCHAR(255) NOT NULL,
    project_id  UUID REFERENCES projects (_id) NOT NULL,
    user_id     UUID REFERENCES users (_id) NOT NULL,
    commit_url         VARCHAR(255),
    commit_msg         VARCHAR(255),
    commit_SHA	VARCHAR(255)
);
 
CREATE TABLE users (
    _id         UUID PRIMARY KEY NOT NULL,
    githandle   VARCHAR(255) NOT NULL,
    project_id  UUID REFERENCES projects (_id) NOT NULL  
);
 
CREATE TABLE users_project (
    _id         UUID PRIMARY KEY NOT NULL,
    user_id     UUID REFERENCES users (_id) NOT NULL,
    project_id  UUID REFERENCES projects (_id) NOT NULL,
    isOwner     BOOLEAN NOT NULL
);
