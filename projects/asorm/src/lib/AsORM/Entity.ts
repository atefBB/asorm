import {DBManager} from './DBManager';
import PouchDB from 'pouchdb';
import PouchdbFind from 'pouchdb-find';

PouchDB.plugin(PouchdbFind);

export function Entity(name?: string) {
  return <T extends new(...args: any[]) => {}>(constructor: T) => {
    const chosenName = name ? name : constructor.name;
    const db = new PouchDB(chosenName);
    DBManager.getInstance().addDB({
      name: chosenName,
      db
    });
    return constructor;
  };
}

