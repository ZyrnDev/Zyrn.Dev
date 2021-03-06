import { FC } from 'react';
import styles from './file.module.css';
import fs from "fs";

export interface File extends Omit<fs.Stats, "isFile"|"isDirectory"|"isBlockDevice"|"isCharacterDevice"|"isFIFIO"|"isSocket"> {
  name: string,
}

const units= ['B', 'KB', 'MB', 'GB', 'TB'];

function byteUnits(bytes: number) {
  let value = bytes;
  for (let i = 0; i < units.length; i++) {
    if (value / 1024 > 1) {
      value = value / 1024;
    } else {
      return (round(value, 2) + units[i]);
    }
  }
  return (round(value, 2) + units[units.length - 1])
}

function round(num: number | number, places: number): number {
    return +(Math.round(Number.parseFloat(num + "e+" + places))  + "e-" + places);
}

const File: FC<{file: File}> = ({ file }) => {
  return (
    <>
      <div key={file.name} className={styles.file}>
        <div>
          Name: <a href={`https://cdn.zyrn.dev/uploads/${file.name}`}>
            {file.name}
          </a>
        </div>
        <div>
          Size: {byteUnits(file.size)}
        </div>
        <div>
          Last Modified: {new Date(file.mtime).toLocaleString()}
        </div>
        
      </div>
    </>
  );
};

export default File;