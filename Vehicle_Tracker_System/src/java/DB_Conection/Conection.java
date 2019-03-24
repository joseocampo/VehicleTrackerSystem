package DB_Conection;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.JOptionPane;

/**
 *
 * @author Moises
 */
//This class connects the project with the local server and the DB
public class Conection {

    private String driver = "com.mysql.jdbc.Driver";
    private String conectionString = "jdbc:mysql://localhost/tracker_system_db";
    private String userB = "root";
    private String passwordB = "";
    public Connection conn;

    public Conection(String user, String password) {
        try {
            Class.forName(driver);
            conn = DriverManager.getConnection(conectionString, userB, passwordB);
            PreparedStatement stm = conn.prepareCall(
                    String.format("select role from t_users where t_users.user = '%s' and t_users.password = '%s'",
                            user, password));

            ResultSet rs = stm.executeQuery();
            if (rs.next() && rs.getInt("role") == 0) {

            } else {
                throw new Exception();
            }

        } catch (Exception e) {
        }

    }

    public boolean isAdmin(String id) {
        try {
            PreparedStatement stm = conn.prepareCall(
                    String.format("select role from t_users where t_users.user = '%s'",
                            id));
            ResultSet rs = stm.executeQuery();
            if (rs.next() && rs.getInt("role") == 0) {
                return true;
            }
        } catch (SQLException ex) {
            Logger.getLogger(Conection.class.getName()).log(Level.SEVERE, null, ex);
        }
        return false;
    }

    public int executeUpdate(String statement) throws SQLException {

        Statement stm = conn.createStatement();
        stm.executeUpdate(statement);

        return stm.getUpdateCount();

    }

    public int prepareCall(String statement) {
        try (CallableStatement stmt = conn.prepareCall(statement)) {
            ResultSet rs;
            stmt.executeQuery();

            return stmt.getUpdateCount();
        } catch (SQLException ex) {
            System.out.println(ex.getMessage());
        }
        return 1;
    }

    public ResultSet executeQuery(String statement) {
        try {
            Statement stm = conn.createStatement();
            return stm.executeQuery(statement);
        } catch (SQLException ex) {
        }
        return null;
    }

}
