import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RaceColoredPlayerName from './RaceColoredPlayerName';
import { convertTime } from '../utility/replay';


const ReplayTableRow = (props) => {
  const { replay } = props;
  const players = Object.values(replay.players).map(
    (player) => (
      <RaceColoredPlayerName
        key={player.id}
        name={player.name}
        race={player.detectedRace || player.race || 0}
      />
    ),
  );
  return (
    <TableRow>
      <TableCell>
        <Typography variant="body2" gutterBottom>
          {players}
        </Typography>
      </TableCell>
      <TableCell>
        {replay.matchup}
      </TableCell>
      <TableCell>
        {replay.map.cleaned}
      </TableCell>
      <TableCell>
        {convertTime(replay.duration)}
      </TableCell>
      <TableCell>
        <Button onClick={() => props.selectReplay(replay.md5)}>
        View
        </Button>
      </TableCell>
    </TableRow>
  );
};
ReplayTableRow.propTypes = {
  replay: PropTypes.object,
  selectReplay: PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(null, mapDispatchToProps)(ReplayTableRow);
