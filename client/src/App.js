import React from 'react';
import './App.css';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root : {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

var customers=[
  {
  'id': 1,
  'image': 'http://placeimg.com/64/64/any/1',
  'name':"노선경",
  'birthday':"950211",
  'gender':"여자",
  'job':"디자이너"
},
{
  'id': 2,
  'image': 'http://placeimg.com/64/64/any/2',
  'name':"마틴시",
  'birthday':"920101",
  'gender':"남자",
  'job':"음악가"
},
{
  'id': 3,
  'image': 'http://placeimg.com/64/64/any/3',
  'name':"무무얌",
  'birthday':"970512",
  'gender':"여자",
  'job':"개발자"
}
]

class App extends React.Component {
  render(){
    const { classes } =this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>이미지</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>생년월일</TableCell>
                <TableCell>성별</TableCell>
                <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map(c => {return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />)})}
          </TableBody>
        </Table>
    </Paper>
    );
  }
  }
        

export default withStyles(styles)(App);
