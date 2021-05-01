import styles from './file.module.css';

function byteUnits(bytes: number) {
  let value = bytes;
  let units= ['B', 'KB', 'MB', 'GB', 'TB'];
  for (let i = 0; i < units.length; i++) {
    if (value / 1024 > 1) {
      value = value / 1024;
    } else {
      return (round(value, 2) + units[i]);
    }
  }
  return (round(value, 2) + units[units.length - 1])
}

function round(num: number | Number, places: number) {
    return +(Math.round(Number.parseFloat(num + "e+" + places))  + "e-" + places);
}

export default function File({ file }) {
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
}


