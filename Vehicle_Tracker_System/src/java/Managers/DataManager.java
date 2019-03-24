package Managers;

import DB_Conection.UserData;
import DB_model.TUserInformation;
import DB_model.TVehicle;
import java.sql.SQLException;

/**
 *
 * @author Moises
 */
//This code manages the different operations with the user data,
//uses code from UserData and eases its manipulation
public class DataManager {

    private final UserData ud;
    private static DataManager uniqueInstance;

    public static DataManager instance(String user, String password) {
        if (uniqueInstance == null) {
            uniqueInstance = new DataManager(user, password);
        }
        return uniqueInstance;
    }

    private DataManager(String user, String password) {
        ud = new UserData(user, password);

    }

    public int addUser(TUserInformation tui) throws Exception {
        return ud.addUser(tui);
    }
    
    public int createUser(String user, String id) throws SQLException{
        return ud.createUser(user, id);
    }
    
    public int addVehicle(TVehicle tv) throws Exception{
        return ud.addVehicle(tv);
    }

    public void removeUser(String id) throws Exception {
        ud.removeUserFromDB(id);
    }
    
    public void removeVehicle(String plaque) throws Exception {
        ud.removeVehicleFromDB(plaque);
    }

    public int changeRol(String id) throws Exception {
        return ud.changeRolFromDB(id);
    }

    public boolean isAdmin(String id) throws SQLException {
        return ud.esAdmin(id);
    }
    
    public boolean adminPrivileges(String id) throws SQLException{
        return ud.adminPrivileges(id);
    }
    
    public boolean userPrivilges(String id) throws SQLException {
        return ud.userPrivileges(id);
    }


}
