import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import InfoIcon from '@mui/icons-material/Info';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

export default function RecipeReviewCard() {
  const data = [
    { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 300, pv: 4567, amt: 1398 },
    { name: 'Page C', uv: 280, pv: 1398, amt: 9800 },
    { name: 'Page D', uv: 200, pv: 9800, amt: 6800 },
    { name: 'Page E', uv: 278, pv: 9800, amt: 6800 },
    { name: 'Page F', uv: 189, pv: 9800, amt: 6800 },
  ];

  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardHeader
        action={
          <Button
            href="#text-buttons"
            startIcon={<InfoIcon />}
            endIcon={<ChevronRightIcon />}
          >
            Manage
          </Button>
        }
        // title="Participants"
        subheader={<Typography variant="body2">Participants</Typography>}
      />
      <CardContent>
        <Grid container spacing={2} columns={2}>
          <Grid item xs={1}>
            <Typography variant="h2">96</Typography>
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={1}
            >
              <Typography variant="caption" display="block">
                21 mentors
              </Typography>
              <Typography variant="caption" display="block">
                43 mentees
              </Typography>
              <Typography variant="caption" display="block">
                34 either
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={1}>
            <Stack direction="row" spacing={1}>
              <CheckCircleIcon />
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish.
                <Typography>
                  Manage requests <ChevronRightIcon />
                </Typography>
                <Typography>Learn more</Typography>
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardContent>
        <LineChart width={500} height={150} data={data}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>
      </CardContent>
      <CardContent>
        <AvatarGroup>
          <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
          <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
          <Typography variant="subtitle">Hayden and 23 others joined your program today</Typography>
        </AvatarGroup>
      </CardContent>
    </Card>
  );
}
