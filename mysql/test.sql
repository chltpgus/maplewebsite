
CREATE TABLE [test1](  
    id int NOT NULL primary key AUTO_INCREMENT comment 'primary key',
    created_time DATETIME COMMENT 'created time',
    updated_time DATETIME COMMENT 'updated time',
    [column] varchar(255) comment ''
) default charset utf8 comment '';