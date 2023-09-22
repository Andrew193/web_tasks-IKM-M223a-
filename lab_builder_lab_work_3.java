interface QueryBuilder {
    QueryBuilder select(String columns);
    QueryBuilder where(String condition);
    QueryBuilder limit(int limit);
    String getSQL();
}

class PostgreSQLQueryBuilder implements QueryBuilder {
    private StringBuilder query;

    public PostgreSQLQueryBuilder() {
        this.query = new StringBuilder();
    }

    @Override
    public QueryBuilder select(String columns) {
        query.append("SELECT ").append(columns);
        return this;
    }

    @Override
    public QueryBuilder where(String condition) {
        query.append(" WHERE ").append(condition);
        return this;
    }

    @Override
    public QueryBuilder limit(int limit) {
        query.append(" LIMIT ").append(limit);
        return this;
    }

    @Override
    public String getSQL() {
        return query.toString();
    }
}

class MySQLQueryBuilder implements QueryBuilder {
    private StringBuilder query;

    public MySQLQueryBuilder() {
        this.query = new StringBuilder();
    }

    @Override
    public QueryBuilder select(String columns) {
        query.append("SELECT ").append(columns);
        return this;
    }

    @Override
    public QueryBuilder where(String condition) {
        query.append(" WHERE ").append(condition);
        return this;
    }

    @Override
    public QueryBuilder limit(int limit) {
        query.append(" LIMIT ").append(limit);
        return this;
    }

    @Override
    public String getSQL() {
        return query.toString();
    }
}

public class lab_builder_lab_work_3 {
    public static void main(String[] args) {
        // Create a PostgreSQL query using the PostgreSQLQueryBuilder.
        QueryBuilder postgresQueryBuilder = new PostgreSQLQueryBuilder();
        String postgresSQLQuery = postgresQueryBuilder
                .select("name, age")
                .where("age > 30")
                .limit(10)
                .getSQL();
        System.out.println("PostgreSQL Query: " + postgresSQLQuery);

        // Create a MySQL query using the MySQLQueryBuilder.
        QueryBuilder mysqlQueryBuilder = new MySQLQueryBuilder();
        String mysqlSQLQuery = mysqlQueryBuilder
                .select("name, age")
                .where("age > 30")
                .limit(10)
                .getSQL();
        System.out.println("MySQL Query: " + mysqlSQLQuery);
    }
}
