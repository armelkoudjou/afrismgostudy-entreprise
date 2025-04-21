import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import React from 'react';

// Palette de couleurs professionnelles
const COLORS = {
    primary: '#2D3748',
    secondary: '#4F46E5',
    accent: '#6366F1',
    lightGray: '#F7FAFC',
    darkGray: '#718096',
    text: '#2D3748'
}

const styles = StyleSheet.create({
    page: {
        padding: 40,
        fontFamily: "Helvetica-Bold",
        backgroundColor: '#FFFFFF',
        position: 'relative'
    },
    header: {
        marginBottom: 25,
        paddingBottom: 15,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: `2 solid ${COLORS.secondary}`
    },
    headerLeft: {
        flex: 1
    },
    title: {
        fontSize: 26,
        fontWeight: 'black',
        color: COLORS.primary,
        letterSpacing: 1
    },
    subtitle: {
        fontSize: 10,
        color: COLORS.darkGray,
        marginTop: 4,
        letterSpacing: 0.5
    },
    section: {
        marginBottom: 20,
        backgroundColor: COLORS.lightGray,
        borderRadius: 4,
        padding: 15,
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 12,
        color: COLORS.secondary,
        textTransform: 'uppercase',
        letterSpacing: 0.8,
        paddingBottom: 4,
        borderBottom: `1 solid ${COLORS.secondary}`
    },
    row: {
        flexDirection: "row",
        marginBottom: 8,
        alignItems: 'flex-start'
    },
    column: {
        flex: 1,
        paddingRight: 10
    },
    label: {
        fontSize: 9,
        color: COLORS.darkGray,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: 3
    },
    value: {
        fontSize: 12,
        color: COLORS.text,
        fontWeight: 'semibold'
    },
    footer: {
        position: "absolute",
        bottom: 25,
        left: 0,
        right: 0,
        textAlign: "center",
        fontSize: 8,
        color: COLORS.darkGray,
        paddingVertical: 8,
        backgroundColor: COLORS.lightGray
    },
    watermark: {
        position: 'absolute',
        opacity: 0.05, // Faible opacité pour ne pas gêner la lecture
        fontSize: 72,
        color: COLORS.primary,
        transform: 'rotate(-45deg)',
        left: 100,
        top: 400,
        zIndex: -1, // Assurer que l'empreinte est derrière le contenu
        letterSpacing: 4
    }
});

const PDFDocument = ({ formData, mockData }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            {/* Filigrane professionnel */}
            <Text style={styles.watermark}>AGENCE D'ÉTUDES INTERNATIONALES</Text>

            {/* En-tête */}
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <Text style={styles.title}>FICHE D'INSCRIPTION</Text>
                    <Text style={styles.subtitle}>DOCUMENT OFFICIEL - N°REF: {Math.random().toString(36).substr(2, 9).toUpperCase()}</Text>
                </View>
            </View>

            {/* Sections améliorées */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Profil de l'Étudiant</Text>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.label}>Identité</Text>
                        <Text style={styles.value}>{formData.firstName} {formData.lastName}</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.label}>Date/Lieu de Naissance</Text>
                        <Text style={styles.value}>{formData.birthDate} - {formData.birthPlace}</Text>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.label}>Contacts</Text>
                        <Text style={styles.value}>{formData.email}</Text>
                        <Text style={styles.value}>{formData.phone}</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.label}>Responsable Légal</Text>
                        <Text style={styles.value}>{formData.parentName}</Text>
                        <Text style={styles.value}>{formData.parentContact}</Text>
                    </View>
                </View>
            </View>

            {/* Section Programme */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Détails du Programme</Text>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.label}>Destination</Text>
                        <Text style={styles.value}>{formData.country}</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.label}>Établissement</Text>
                        <Text style={styles.value}>{formData.university}</Text>
                    </View>
    
                </View>

                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.label}>Domaine d'Études</Text>
                        <Text style={styles.value}>{formData.field}</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.label}>Niveau Académique</Text>
                        <Text style={styles.value}>{formData.level}</Text>
                    </View>
                </View>

                {/* Frais de Scolarité inclus dans Programme */}
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.label}>Frais de Scolarité</Text>
                        <Text style={styles.value}>
                            {formData.tuitionFee ? formData.tuitionFee.toLocaleString() : "Non renseigné"} FCFA
                        </Text>
                    </View>
                </View>
            </View>

            {/* Signature */}
            <View style={styles.footer}>
                <Text>Agence d'Études à l'Étranger • contact@agence-etranger.com • +33 1 23 45 67 89</Text>
                <Text>Imprimé le {new Date().toLocaleDateString()} • Document protégé par droits d'auteur</Text>
            </View>
        </Page>
    </Document>
);

export default PDFDocument;
