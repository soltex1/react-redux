import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

function PostsFilter () {

  const classes = useStyles()
  const [filter, setFilter] = React.useState(10)

  const handleChange = event => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filter}
          onChange={handleChange}
        >
          <MenuItem value={10}>Date</MenuItem>
          <MenuItem value={20}>Score</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

export default PostsFilter
