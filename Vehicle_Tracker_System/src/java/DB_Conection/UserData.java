package DB_Conection;

import DB_model.TUserInformation;
import DB_model.TVehicle;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 *
 * @author Moises
 */
public class UserData {

    Conection conn;

    public UserData(String user, String password) {
        conn = new Conection(user, password);
    }

    //This method allows the registration of a new clerk
    public int addUser(TUserInformation tui) throws Exception {

        String query = "insert into t_user_information(PK_Id, name, surname, second_surname, area, phone_number, email, address)"
                + "values ('%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s')";
        query = String.format(query, tui.getPkId(), tui.getName(), tui.getSurname(), tui.getSecondSurname(), tui.getArea(), tui.getPhoneNumber(), tui.getEmail(), tui.getAddress());
        int count = conn.executeUpdate(query);
        return count;
    }

    public int addVehicle(TVehicle tv) throws Exception {
        String query = "insert into t_vehicle(PK_License_plate, model, brand, year_purchase)"
                + "values ('%s', '%s', '%s', '%s')";
        query = String.format(query, tv.getPkLicensePlate(), tv.getModel(), tv.getBrand(), tv.getYearPurchase());
        int count = conn.executeUpdate(query);
        return count;
    }

    //A user can be removed from the DB using this method
    public void removeUserFromDB(String id) throws Exception {

        String query = "delete from t_users where user = '%s'";
        query = String.format(query, id);
        int count = conn.executeUpdate(query);

    }

    public void removeVehicleFromDB(String plaque) throws Exception {

        String query = "delete from t_vehicle where PK_License_plate = '%s'";
        query = String.format(query, plaque);
        int count = conn.executeUpdate(query);

    }

    public int changeRolFromDB(String id) throws Exception {

        String query = "RemovePrivileges '%s'@'localhost'";
        query = String.format(query, id);
        int count = conn.executeUpdate(query);
        return count;

    }

    public int createUser(String user, String id) throws SQLException {
        String query = "insert into t_users(user,password,role) values('%s','%s',1)";
        query = String.format(query, user, id);
        int count = conn.executeUpdate(query);
        return count;
    }

    public boolean adminPrivileges(String id) throws SQLException {

        String query = "call administrator('%s');";
        query = String.format(query, id);
        return conn.prepareCall(query) == 1;

    }

    public boolean userPrivileges(String id) throws SQLException {

        String query = String.format("call vehicle_user('%s')", id);
        return conn.prepareCall(query) == 1;

    }

    public boolean esAdmin(String id) throws SQLException {
        return conn.isAdmin(id);
    }
}