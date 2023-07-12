import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Stack,
  List,
  ListItemText,
  ListItem,
  ListItemIcon,
  Chip,
  ListItemButton,
  Button,
  Table,
  TableBody,
  TableCell,
  TableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import LaunchIcon from '@mui/icons-material/Launch';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from '@mui/material/Link';
import { Code } from '@mui/icons-material';

export default function Example({ content }) {
  //Theme colors table
  return (
    <Container>
      <Box sx={{ boxShadow: 3 }} p={5} m={3}>
        <Box>
          <Typography variant="h4" align="center">
            {content.mui_title}
          </Typography>
          <br />
          <Box>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>MUI Theme Name</TableCell>
                    <TableCell>Zesty Brand Name</TableCell>
                    <TableCell>MUI Reference</TableCell>
                    <TableCell align="center">Description</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {content.table_content.data.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <Typography
                          variant="overline"
                          sx={{ color: `${row.theme_name.toLowerCase()}.main` }}
                          fontWeight={600}
                        >
                          {row.theme_name}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          sx={{ color: `${row.theme_name.toLowerCase()}.main` }}
                          fontWeight={580}
                          fontSize={12}
                        >
                          {row.zesty_style}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="caption">{row.mui_ref}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="caption">
                          {row.description}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          {/* Theme Color Example */}
          <Box m={5}>
            <Card
              sx={{
                backgroundColor: 'warning.light',
                padding: '1rem',
                marginTop: '1rem',
              }}
            >
              {/* Note panel */}
              <Typography variant="subtitle2" fontFamily={'Verdana'}>
                {content.note}
              </Typography>
            </Card>

            <Typography mt={3} variant="h4">
              {content.sxtitle}
            </Typography>
            <Box
              component="div"
              sx={{
                backgroundColor: '#101010',
                border: '5px solid',
                borderColor: 'grey.500',
                borderRadius: '5px',
                color: 'info.light',
                padding: '20px',
                fontFamily: 'monospace',
                code: { color: 'info.light' },
              }}
            >
              <text>{content.sxcode}</text>
            </Box>

            <Typography mt={1}> Output: </Typography>

            <Card sx={{ padding: '1rem' }}>
              <Typography sx={{ color: 'primary.main' }}>
                {content.sxoutput}
              </Typography>
            </Card>

            <Typography mt={3} variant="h4">
              {content.colortitle}
            </Typography>

            <Box
              component="div"
              sx={{
                backgroundColor: '#101010',
                border: '5px solid',
                borderColor: 'grey.500',
                borderRadius: '5px',
                color: 'info.light',
                padding: '20px',
                fontFamily: 'monospace',
                code: { color: 'info.light' },
              }}
            >
              <text>{content.colorcode}</text>
            </Box>

            <Typography mt={1}> Output: </Typography>

            <Card sx={{ padding: '1rem' }}>
              <Typography sx={{ color: 'primary.main' }}>
                {content.coloroutput}
              </Typography>
            </Card>
          </Box>
        </Box>

        <Box
          m={5}
          mt={7}
          sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <Typography variant="h3">Typography:</Typography>
          <Typography variant="h1" color="primary.main" component="span">
            {content.h1_text}
          </Typography>
          <Typography variant="h2" color="secondary.main" component="span">
            {content.h2_text}
          </Typography>
          <Typography variant="h3" color="success.main" component="span">
            {content.h3_text}
          </Typography>
          <Typography variant="h4" color="info.main" component="span">
            {content.h4_text}
          </Typography>
          <Typography variant="h5" color="warning.main" component="span">
            {content.h5_text}
          </Typography>
          <Typography variant="h6" color="error.main" component="span">
            {content.h6_text}
          </Typography>

          <Typography>This is the normal text</Typography>
          <Typography mt={3} variant="h3">
            Typography component with header variant:
          </Typography>

          {/* Codeblock */}
          <Box
            component="div"
            sx={{
              backgroundColor: '#101010',
              border: '5px solid',
              borderColor: 'grey.500',
              borderRadius: '5px',
              color: 'info.light',
              padding: '20px',
              fontFamily: 'monospace',
            }}
          >
            <code>{`<Typography variant="h1" color="primary.main">
                Hello World
            </Typography>`}</code>
          </Box>
          <Typography> Output: </Typography>
          <Card sx={{ padding: '1rem' }}>
            <Typography variant="h1" color="primary.main">
              Hello World
            </Typography>
          </Card>

          <Card
            sx={{
              backgroundColor: 'warning.light',
              padding: '1rem',
            }}
          >
            {/* Note panel */}
            <Typography variant="subtitle2" fontFamily={'Verdana'}>
              Some Typography settings from the zesty instace such as:
              @font-size-base, @headings-color and @headings-font-weight are
              added by default to h1-h6 variants.
            </Typography>
            <br />
            <Typography variant="subtitle2">
              <Link
                href="https://mui.com/material-ui/react-typography/"
                target="_blank"
                rel="noopener"
                sx={{ fontWeight: '600', fontFamily: 'Verdana' }}
              >
                Click here
              </Link>{' '}
              for more Typography details with MUI
            </Typography>
          </Card>
        </Box>

        <Box
          m={5}
          mt={7}
          sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <Box
            component="div"
            sx={{ display: 'flex', justifyContent: 'space-evenly' }}
          >
            <Box
              component="div"
              sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              <Typography mt={3} variant="h3">
                Buttons with theme colors:
              </Typography>
              <Button variant="contained" sx={{ width: '200px' }}>
                Primary
              </Button>
              <Button
                variant="contained"
                color="secondary"
                sx={{ width: '200px' }}
              >
                Secondary
              </Button>
              <Button
                variant="contained"
                color="success"
                sx={{ width: '200px' }}
              >
                Success
              </Button>
              <Button variant="contained" color="info" sx={{ width: '200px' }}>
                Info
              </Button>
              <Button
                variant="contained"
                color="warning"
                sx={{ width: '200px' }}
              >
                Warning
              </Button>
              <Button variant="contained" color="error" sx={{ width: '200px' }}>
                Error
              </Button>
            </Box>
            <Box
              component="div"
              sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              <Typography mt={3} variant="h3">
                Button variants:
              </Typography>
              <Button variant="text" color="primary" sx={{ width: '200px' }}>
                Text / Default
              </Button>

              <Button
                variant="contained"
                color="primary"
                sx={{ width: '200px' }}
              >
                Contained
              </Button>

              <Button
                variant="outlined"
                color="primary"
                sx={{ width: '200px' }}
              >
                Outlined
              </Button>
            </Box>
          </Box>

          <Typography mt={3} variant="h3">
            Button usage example:
          </Typography>
          {/* Codeblock */}
          <Box
            component="div"
            sx={{
              backgroundColor: '#101010',
              border: '5px solid',
              borderColor: 'grey.500',
              borderRadius: '5px',
              color: 'info.light',
              padding: '20px',
              fontFamily: 'monospace',
            }}
          >
            <code>{`<Button variant="contained" color="success">
              Primary
            </Button>`}</code>
          </Box>
          <Typography> Output: </Typography>
          <Card sx={{ padding: '1rem' }}>
            <Button variant="contained" color="success">
              Success Button
            </Button>
          </Card>
          {/* Note panel */}
          <Card
            sx={{
              backgroundColor: 'warning.light',
              padding: '1rem',
            }}
          >
            <Typography variant="subtitle2" fontFamily={'Verdana'}>
              Button theme colors are also based from the Zesty Instace brand
              colors. For more details about
              <code style={{ color: 'green', fontSize: '1rem' }}>
                {'<Button>'}
              </code>{' '}
              component,{' '}
              <Link
                href="https://mui.com/material-ui/react-button/"
                target="_blank"
              >
                click here
              </Link>
              .
            </Typography>
          </Card>
        </Box>
      </Box>
    </Container>
  );
}
