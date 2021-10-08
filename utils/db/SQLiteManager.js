import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('sympotom.db');

export const init = () => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(`CREATE TABLE IF NOT EXISTS sympotom (
                    id INTEGER PRIMARY KEY NOT NULL,
                    painName TEXT NOT NULL,
                    type TEXT NOT NULL
                )`,
                [],
                () => resolve(),
                (_, err) => reject(err),
            )
        });
    });
};

export const insertAddress = (
    painName,
    type
) => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `INSERT INTO sympotom (painName, type) VALUES (?, ?)`,
                [painName, type],
                (_, result) => resolve(result),
                (_, error) => reject(error),
            )
        })
    })
}

export const fetchAddresses = (type="adult") => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM sympotom where type = ?',
                [type],
                (_, result) => resolve(result),
                (_, error) => reject(error),
            )
        })
    })
}