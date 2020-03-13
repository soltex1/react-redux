import React from 'react'
import Grid from '@material-ui/core/Grid/index'
import Button from '@material-ui/core/Button/index'
import Title from './Title'
import BackIcon from '@material-ui/icons/ArrowBack'

const TitleAction = ({ iconName, title, subTitle, history, path }) => {
  return (
    <Grid style={{ height: '97px', minHeight: '97px' }} spacing={3} container justify="center" alignItems="center">
      <Grid style={{ paddingLeft: '20px' }} item xs={2}>
        {iconName && <Button onClick={() => history.push(path)}>
          <BackIcon style={{ marginRight: 5 }}/> {iconName}
        </Button>}
      </Grid>
      <Grid item xs={8}>
        <Grid container justify="center" alignItems="center">
          <Title marginTop={1} title={title} subTitle={subTitle}/>
        </Grid>
      </Grid>
      <Grid item xs={2}/>
    </Grid>
  )
}

export default TitleAction
