import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Qualifications() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', p: 3}}>
      <h1 className='mode'>Qualifications</h1>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sree Chaitanya" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVLq3bWGKgwuPOhgXP1I6F7v8-W4Ts3PAeZFmAVXBXlQ&s" />
        </ListItemAvatar>
        <ListItemText
          primary="Sree Chaitanya Institutes of Technological Sciences"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                60% CGPA
              </Typography>
              {" — BTech(ECE)"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Alphors" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_2mb_4_5vOR8Jayd1Mt5kMU90G8ShrEOPkN2uXYkPkg&s" />
        </ListItemAvatar>
        <ListItemText
          primary="Alphors Junior College"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                72% CGPA
              </Typography>
              {" — MPC"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Krishnaveni" src="data:image/png;base64,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" />
        </ListItemAvatar>
        <ListItemText
          primary="Krishnaveni High School"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                90% CGPA
              </Typography>
              {' — Higher Secondory Education '}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}