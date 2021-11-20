import React from 'react';
import { View } from 'react-native';
import { DataTable } from 'react-native-paper';

// TODO:別ファイルに切り出す
const columns = ['Move', 'Startup', 'Active', 'Total', 'IASA'];

const FrameTable = ((frames) => {
  const moves = Object.keys(frames.frames === undefined ? {} : frames.frames)
  return (
    <View>
      <DataTable>
        <DataTable.Header>
          {columns.map((tech, index) => {
            return <DataTable.Title key={index}>{tech}</DataTable.Title>
          })}
        </DataTable.Header>
        {moves.map((move, index) => {
          const data = frames.frames[move]
          return <DataTable.Row key={index}>
              {columns.map((column, index) => <DataTable.Cell key={index}>{column === undefined ? '' : data[column]}</DataTable.Cell>)}
            </DataTable.Row>
        })}
      </DataTable>
    </View>
  );
  }
)

export default FrameTable;